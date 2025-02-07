from mysql.connector import connect, Error
import requests

class Movie:
    def __init__(self, id:int, title:str|None, director:str|None, year:int|None, poster:str|None, elo=1400):
        self.id = id
        self.title = title
        self.director = director
        self.year = year
        self.poster = poster


    def __repr__(self):
        return f"<Movie(id={self.id}, title={self.title}, director={self.director}, year={self.year}, poster_url={self.poster_url})>"


API_KEY = ""
API_TOKEN = ""
BASE_URL = "https://api.themoviedb.org/3"
POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500"

configure = {
    "user": "root", 
    "password": "MySQL_root", 
    "host": "localhost", 
    "database": "movierating"
    }

# Função para buscar o diretor de um filme
def get_diretor(movie_id):
    url = f"{BASE_URL}/movie/{movie_id}/credits"
    params = {"api_key": API_KEY}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        credits = response.json()
        for crew_member in credits.get('crew', []):
            if crew_member['job'] == 'Director':
                return crew_member['name']
    return "Desconhecido"


def get_movies_by_most_voted() -> list[Movie]|None:
    movies = []
    count = 0
    for page in range(1,2): #20 filmes por pagina
        url = f"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page={page}&sort_by=vote_count.desc"
        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {API_TOKEN}"
        }

        response = requests.get(url, headers=headers)
        print(f"PAGE {page}")
        if response.status_code == 200:
            filmes = response.json().get('results', [])
            for filme in filmes:
                movie_id = filme['id']
                titulo = filme['title']
                ano = int(filme['release_date'].split("-")[0]) if filme['release_date'] else None
                poster_url = POSTER_BASE_URL + filme['poster_path'] if filme['poster_path'] else None
                diretor = get_diretor(movie_id)
                count = count + 1
                print(f"{count} -> {movie_id, titulo, diretor, ano}")
                movies.append(Movie(movie_id, titulo, diretor, ano, poster_url, 1400))
            # app_logger.info(f"{count} most voted movies fetched from TMDB")

        else:
            # error_logger.error(f"Error when accessing page {page}: {response.status_code}")
            break

    return movies


def get_movies_by_top_rated() -> list[Movie]|None:
    movies = []
    count = 0
    for page in range(1,2): #20 filmes por pagina
        url = f"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page={page}"

        headers = {
            "accept": "application/json",
            "Authorization": f"Bearer {API_TOKEN}"
        }

        response = requests.get(url, headers=headers)

        print(f"PAGE {page}")
        if response.status_code == 200:
            filmes = response.json().get('results', [])
            for filme in filmes:
                movie_id = filme['id']
                titulo = filme['title']
                ano = int(filme['release_date'].split("-")[0]) if filme['release_date'] else None
                poster_url = POSTER_BASE_URL + filme['poster_path'] if filme['poster_path'] else None
                diretor = get_diretor(movie_id)
                count = count + 1
                print(f"{count} -> {movie_id, titulo, diretor, ano}")
                movies.append(Movie(movie_id, titulo, diretor, ano, poster_url, 1400))
            # app_logger.info(f"{count} top rated movies fetched from TMDB")

        else:
            # error_logger.error(f"Error when accessing page {page}: {response.status_code}")
            break

    return movies


def insert_movies(movie_set:set[Movie]):
    query = """
        INSERT INTO movies (id, title, director, year, poster)
        VALUES (%s, %s, %s, %s, %s)
        """
    list_of_tuples = [(movie.id,movie.title,movie.director,movie.year,movie.poster) for movie in movie_set]
    try:
        conn = connect(**configure)
        with conn.cursor() as cur:
            cur.executemany(query, list_of_tuples)
            # app_logger.info(f"{cur.rowcount} movies inserted successfully.")
        conn.commit()  # Salva as alterações no banco
    except Error as e:
        # error_logger.error(f"Error inserting movies: {e}")
        conn.rollback()  # Reverte as alterações em caso de erro
    finally:
        if conn.is_connected():
            conn.close()


def insert_movies_from_list(movie_list:set[Movie]):
    insert_query = """
        INSERT INTO movies (id, title, director, year, poster)
        VALUES (%s, %s, %s, %s, %s)
        """
    verification_query = "SELECT COUNT(*) FROM movies WHERE id = %s"
    count = 0
    try:
        conn = connect(**configure)
        with conn.cursor() as cur:
            for movie in movie_list:
                cur.execute(verification_query, (movie.id,))
                res = cur.fetchone()

                if res[0] == 0:
                    cur.execute(insert_query, (movie.id, movie.title, movie.director, movie.year, movie.poster))
                    conn.commit()
                    count += 1
                    # app_logger.info(f"Movie {movie.title} inserted successfully.")
                else:
                    print(f"Movie {movie.title} is already in the database.")
        conn.commit()
    except Error as e:
        conn.rollback()
    finally:
        if conn.is_connected(): conn.close()

insert_movies(get_movies_by_most_voted())
insert_movies_from_list(get_movies_by_top_rated())
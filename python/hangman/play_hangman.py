import get_word
import get_guess



def format_word(w):
    f = []
    for i in w:
        f.append(i+" ")
    f = "".join(f)
    return f


def display(w):
    print(w)
    board = {}
    for i in range(len(w)):
        board[i] = "_ "
    display_board = "".join(board.values())

    last_guesses = []
    while len(last_guesses) < len(w) and display_board != format_word(w):
        if "quit" in last_guesses:
            display_board = "quit"
            break

        print(f"You have {len(w) - len(last_guesses)} guesses left\n")
        print(display_board)
        guess = get_guess.get_guess()
        position = []

        if guess not in last_guesses:
            last_guesses.append(guess)
        else:
            print(f"You have already tried the letters {last_guesses}'")
            
        for i in range(len(w)):
            if w[i] == guess:
                position.append(i)

        for i in position:
            board[i] = guess + " "

        display_board = "".join(board.values())

    return display_board

    


def play_hangman():
    print("Welcome to Hangman!")
    play_again = "y"
    word_count = 0
    wins = 0

    while play_again == "y":
        word_count += 1
        w = get_word.get_word()
        f_w = format_word(w)
        board = display(w)

        if board == "quit":
            break
        
        if board != f_w:
            print(board)
            print("\nYou don't have the entire word")
            guess_word = input("Guess the word:\n> ")
            if format_word(guess_word.upper()) == f_w:
                wins += 1
                print(f"\nYou guessed the word {w} and won this round")
            else:
                print(f"You could not guess the word {w} and lost this round")
        else:
            wins += 1
            print(f"\nYou guessed the word {w} and won this round")

        play_again = input("\nWould you like to play again (y/n)? ")

    print(f"You played {word_count} times and won {wins} times.")
    




play_hangman()
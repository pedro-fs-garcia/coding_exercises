# Programa de demonstração de Threads em Python

import threading, time, random

def exemplo_thread(indice:int, etapas:int) -> None:
    print(f"++ thread {indice} foi inicializada")
    
    # Gera um tempo aleatório para simular o tempo de processamento das etapas do processamento
    tempo = random.randint(1, 5) 
    for i in range(etapas):
        print(f"** thread {indice} -> etapa {i}")
        time.sleep(tempo) #simulação do tempo de processamento
    print(f"-- thread {indice} foi finalizada")


def teste() -> None:
    # Cria e inicia a primeira thread
    t1 = threading.Thread(target=exemplo_thread, args=(1, 5))
    t1.start() # A thread começa a executar em paralelo

    t2 = threading.Thread(target=exemplo_thread, args = (2, 2))
    t2.start() # A thread começa a executar em paralelo, simultaneamente com t1

    # Aguarda término das threads
    t1.join()  # Bloqueia até t1 terminar
    t2.join()  # Bloqueia até t2 terminar


if __name__ == "__main__":
    """
    Ponto de entrada do programa. Cria múltiplas threads e gerencia sua execução.
    
    O sistema operacional faz o escalonamento das threads, decidindo quando cada uma
    executa com base em seu algoritmo de escalonamento (normalmente round-robin com
    prioridades). O GIL (Global Interpreter Lock) do Python garante que apenas uma
    thread execute código Python por vez, mas a troca entre threads ocorre para
    operações de I/O (como time.sleep).
    """
    threads = []
    for i in "ABCDE":
        etapas = random.randint(1, 5)

        # cria nova thread com identificador i e um numero aleatório de etapas
        t = threading.Thread(target=exemplo_thread, args=(i, etapas))
        threads.append(t)

        # Inicia a thread - agora ela compete por tempo de CPU
        t.start()

    # Controle de execução: aguarda todas as threads terminarem
    for t in threads: 
        t.join()

    print("\nSimulação encerrada") # Só executa esta linha quando TODAS as threads terminarem
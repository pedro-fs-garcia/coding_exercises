def get_guess():
    while True:
        g = input("Enter one letter:\n> ")
        if g.isalpha() and len(g) == 1:
                return g.upper()

        if g.lower() in ["quit", "exit"]:
            return "quit"
        print("Your guess is invalid.")

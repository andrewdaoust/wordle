import json
import random
from termcolor import colored


def load_words():
    with open('words.txt', 'r') as f:
        words = f.readlines()

    five_letter_words = []
    for word in words:
        word = word.replace('\n', '')
        five_letter_words.append(word)
    return five_letter_words


def select_word(words):
    l = len(words)
    r = random.randint(0, l)
    return words[r]


def validate_guess(guess, words):
    guess = guess.lower()

    correct_len = len(guess) == 5

    if correct_len:
        in_words = guess in words
        if in_words:
            return True
        return False
    return False


def check_input(guess, answer):
    guess = guess.upper()

    # Correct
    if guess == answer:
        return True, [
            colored(guess[0], 'black', 'on_green'),
            colored(guess[1], 'black', 'on_green'),
            colored(guess[2], 'black', 'on_green'),
            colored(guess[3], 'black', 'on_green'),
            colored(guess[4], 'black', 'on_green')
        ]

    output = [None] * 5
    # correct_indices = []
    unmatched_indices = []
    unmatched_answer_letters = []

    for i in range(len(guess)):
        guess_letter = guess[i]
        answer_letter = answer[i]

        if guess_letter == answer_letter:
            output[i] = colored(guess_letter, 'grey', 'on_green')
            # correct_indices.append(i)
        else:
            unmatched_indices.append(i)
            unmatched_answer_letters.append(answer_letter)

    # guess_remaining = ''
    for j in unmatched_indices:
        guess_letter = guess[j]

        if guess_letter in unmatched_answer_letters:
            output[j] = colored(guess_letter, 'grey', 'on_yellow')
            unmatched_answer_letters.remove(guess_letter)
        else:
            output[j] = colored(guess_letter, 'grey', 'on_white')

    return False, output


def render_output_row(output):
    rendered_output = ''
    for letter in output:
        rendered_output += letter

    print(rendered_output)


def render(outputs):
    print()
    for output in outputs:
        render_output_row(output)
    print()


if __name__ == '__main__':
    words = load_words()
    answer = select_word(words)
    answer = answer.upper()

    print(answer)

    win = False
    outputs = []
    i = 1
    while i < 6:
        guess = input(f'Guess the 5 letter word ({i}/6): ')

        valid = validate_guess(guess, words)
        if not valid:
            print('Guess was not valid, guess again')
            continue

        win, output = check_input(guess, answer)

        outputs.append(output)

        if win:
            print(f'You won! {i}/6')
            render(outputs)
            break
        else:
            render(outputs)
            i += 1

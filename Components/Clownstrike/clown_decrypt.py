ascii_output = ""

with open('./clownstrike.sys', 'rb') as file:
    binary_data = file.read()
    
    # Tally to count 0x0
    num_zeroes = 0

    for byte in binary_data:
        if byte == 0x00:
            num_zeroes += 1
        elif byte == 0x30:          # This is actually 00
            ascii_output += chr(num_zeroes)
            num_zeroes = 0
        else:
            print("Oops something went wrong")

print(ascii_output)
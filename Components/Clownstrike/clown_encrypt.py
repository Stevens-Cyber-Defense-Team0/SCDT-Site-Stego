bin_output = b""

with open('./message.txt', 'r') as file:
    message = file.read()
    
    for char in message:
        binary = ord(char)
        bin_output += b"\x00" * binary
        bin_output += b"0"

with open("./clownstrike.sys", 'wb') as file:
    file.write(bin_output)
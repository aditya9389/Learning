file=open('my_txt','a')
for text in range(50):
    file.write('This is my text.\n')
file.close()
count=0
file=open('my_txt','r')
for line in file:
    count+=1
print(count,'lines are present')
file.close()
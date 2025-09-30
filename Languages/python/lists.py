my_list=[1,2,'edureka']
print(my_list)
my_list_2=list([1,2,'edureka'])
print(my_list_2)

print(my_list_2[0])
print(my_list[:])  #give whole list
print(my_list[0:2])  #give 0,1
print(my_list[::-1])    #print in rev
print(my_list[0:5:2])   #go from 0 to 4 and jump 32 times but as we have 3 element so it stopped like a for loop
print(my_list[2][2])    #print second char of that string

my_list.append([22,3])  #will add 22,3 as a single element
print(my_list)
print(len(my_list))

my_list.extend([1,2,3])  #will add 1,2,3 one by one
print(my_list)
print(len(my_list))

my_list.insert(1,'a') #will insert at specified index
print(my_list)
print(len(my_list))

print(my_list + ['just for example'])  #concatenation but will not change data
print(my_list*2)
print(my_list)

my_list_con=my_list + ['just for example']
print(my_list_con)
my_list_double=my_list*2
print(my_list_double)

my_list.remove(2)
print(my_list)
my_list.remove('a')
print(my_list)

a=my_list.pop(3) #return element at specified index
print(a)

my_list.reverse()
print(my_list)

number_list=[1,2,3,1,3,4]
number_list.sort(reverse=True)    #descending if true
print(number_list)

my_list_sorted=sorted(number_list)
print(my_list_sorted)

my_list_copy=my_list.copy()
print(my_list_copy)



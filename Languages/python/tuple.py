my_tuple=()
my_tuple_2=tuple()
print(my_tuple)
print(my_tuple_2)
my_tuple=my_tuple+(1,) #this can run as tuple still didnt had any val
print(my_tuple)

my_tuple=(1,2,3)    #cant change but this is redeclaration
my_tuple_2=tuple(('python','for',1))
print(my_tuple)
print(my_tuple_2)
my_tuple_3=1,     #always add , in last else it will be a string

my_tuple_4=(1,2,3,['english','hindi'])
print(my_tuple_4)
my_tuple_4[3][0]='french'   #this is allowed as list it self is mutable but you cant change that 1,2 3
print(my_tuple_4)


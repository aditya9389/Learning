my_dict={}
my_dict_2=dict({})
my_dict_3=dict()
print(my_dict)
print(my_dict_2)
print(my_dict_3)
#all same

my_dict={1:'a',2:'b',3:'c'}
print(my_dict)
my_dict_2=dict({1:'a',2:'b',3:'c'})
print(my_dict_2)

print(my_dict_2[1])
print(my_dict_2.get(2))

my_dict[1]='d'      #can change like this
print(my_dict)
my_dict[4]='e'    #can add new val just like this
print(my_dict)

a=my_dict.pop(1)  #deletes that element
print(my_dict)
print(a)
b=my_dict.popitem()  #random delete
my_dict.clear()      #all delete


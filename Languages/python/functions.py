#some in built functions
list1=[1,2,3,4,5]
print(abs(-7))
print(all(list1))
print(any(list1))
print(len(list1))
print(min(list1))
print(max(list1))
print(sum(list1))
print(type(list1))

def pass_by_val(bar):
    bar='new val'
    print(bar)

temp='new'
pass_by_val(temp)
print(temp)


def pass_by_ref(my_list):
    my_list.append(4)
    print(my_list)

original_list=[1,2,3,4,5]
pass_by_ref(original_list)
print(original_list)
#Python passes references to objects.
#Whether changes made within a function affect the
#original variable depends on the mutability of the
#object and whether the operation modifies
#the object in-place or reassigns the local variable
#to a new object.
#like numbers,strings,tuples are immutable
#so they works pass by val but they are still pass by ref(obj)
#and lists,dict, sets are pure pass by ref bcz they are mutable
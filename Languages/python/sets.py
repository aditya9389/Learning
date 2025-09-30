my_set={1,2,3,4,5,5,5,5,5,5}
print(my_set)

my_set.add(6)
print(my_set)

my_set.remove(6)
print(my_set)

my_set2={2,3,5,6}
print(my_set2.union(my_set),'-----',my_set | my_set2)
print(my_set2.intersection(my_set),'-----',my_set & my_set2)
print(my_set.difference(my_set2),'-----',my_set - my_set2)
print(my_set2.symmetric_difference(my_set),'-----',my_set ^ my_set2)

superset={1,2,3,4,5,6,7,8,9,10}
s1={1,2,3,4}
s2={3,4,5,6}
print(s1==s2)   #if symmetric
print(s1!=s2)   #if not sym
print(s1 <= superset)   #if s1 is subset of superset
print(s1 < superset)    #IF S1 is proper subset of superset
print(s1 >= s2)         #if s2 is a subset of s1
print(s1 > s2)             #if s2 is proper subset of s1
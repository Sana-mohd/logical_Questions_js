list=[20,30,45,60]
dic={"savita":45,"sana":20,"anisha":60,"amla":30}
new_d={}
j=0
while j<len(list):
    for i in dic.keys():
        a=dic[i]
        if a==list[j]:
            new_d[i]=a
    j+=1
print(new_d)


#include<stdio.h>
#define max 100


int stack[max];
int top=-1;

int IsEmpty(){
    if(top==-1)
    {
        return 1;
    }
    else
    return 0;
}
void push(int data){
    if(top==max-1){
        printf("overflow");
        return;
    }
    stack[++top]=data;
}
int pop(){
    if(IsEmpty())
    {
        printf("underflow");
        return -1;
    }
    return stack[top--];
}
int main(){
    push(10);
    push(20);
    int data1=pop();
    int data2=pop();
    int data3=pop();
    printf("%d",data1);
    printf("%d",data2);
    printf("%d",data3);
}
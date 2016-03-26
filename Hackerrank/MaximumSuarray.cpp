#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
int conti_sol(int arr[],int n){
    int curr=0;
    int tot=0;  
    int positive=0;
    for (int i=0;i<n;++i){
        if (arr[i]>0) 
            positive=1;
        curr=max(0,curr+arr[i]);
        tot=max(curr,tot);
    }
    if(positive==0){
        tot=arr[0];
        for(int i=0;i<n;++i)
            tot=max(tot,arr[i]);
    }
    
   return tot;
}
int non_conti_sol(int arr[],int n){
    int sum=0;
    for (int i=0; i<n;++i){
        if(arr[i]>0)
            sum+=arr[i];
    }
    if(sum==0){
        sum=arr[0];
        for(int i=0;i<n;++i)
            sum=max(sum,arr[i]);
    }
    return sum;
}
int scanarr(int arr[],int n);
int main() {
    int cases;
    
    scanf("%d",&cases);
    int sols1[cases];
    int sols2[cases];
    for (int i=0; i<cases;i++){
        int size=0;
        scanf("%d",&size);
        int arr[size];
        scanarr(arr,size);
        sols1[i]=conti_sol(arr,size);
        sols2[i]=non_conti_sol(arr,size);
    }
    for(int i=0 ;i<cases;i++)
        cout<<sols1[i]<<" "<<sols2[i]<<endl;
        
    return 0;
}
int scanarr(int arr[],int n){
    for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    return 0;
}

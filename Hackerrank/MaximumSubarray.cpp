 /**
    Maximum Subarray Problem - Hackerrank
    maximumsubarray.cpp
    Purpose: Solves the Maximum Subarray problem

    @author thejedi
    @version 1.0 26/03/2016
    
    (!) For any mistake/problem/question, please contact me at thejedi@null.net
    */
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
//this function will find the maximum sum of the maximal subarrat
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
//this function finds the maximum of the maximum combination of elements, regardless of position in the array.
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
int scanarr(int arr[],int n); //handles scanning of arrays
int main() {
    int cases; //number of test cases
    scanf("%d",&cases);
    int sols1[cases]; //is used to store solution for the first problem
    int sols2[cases]; //is used to store solution for the second problem
    for (int i=0; i<cases;i++){
        int size=0;
        scanf("%d",&size);
        int arr[size];
        scanarr(arr,size);
        sols1[i]=conti_sol(arr,size);
        sols2[i]=non_conti_sol(arr,size);
    }
    for(int i=0 ;i<cases;i++) //prints out solutions in the correct format
        cout<<sols1[i]<<" "<<sols2[i]<<endl;
        
    return 0;
}
/handles the scanning of arrays
int scanarr(int arr[],int n){
    for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    return 0;
}

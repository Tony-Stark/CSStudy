//TODO: Support Files
//      Add docs

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
using namespace std;

int MaxSum(int arr[6][6],int memo[6][6], int n,int i, int j);
int main(){
    int arr[][6]={{1,0,0,0,0,0},
                   {11,2,0,0,0,0},
                   {10,7,9,0,0,0},
                   {2,4,3,22,0,0},
                   {3,3,2,4,12,0},
                   {2,3,5,2,9,13}};
    int memo[6][6];
    for(int i=0;i<6;++i)
    	for(int j=0;j<6;++j)
    		memo[i][j]=-1;
    int sol=MaxSum(arr,memo,6,0,0);

    cout<<sol<<endl;
}
int MaxSum(int arr[][6],int memo[][6], int n,int i, int j){
    if(i==6)
        return 0;
    else if (memo[i][j]==-1){
        int a=arr[i][j] + max(MaxSum(arr,memo,6,i+1,j),MaxSum(arr,memo,6,i+1,j));
        memo[i][j]=a;
        }
    return memo[i][j];
}

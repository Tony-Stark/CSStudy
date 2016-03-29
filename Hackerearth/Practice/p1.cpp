#include <iostream>
#include <cmath>

using namespace std;

int main()
{ //
int c=0;
int count=0;
int iter=1;
cin>>c;
while(c/(pow(5,iter))>0){
count+=c/(pow(5,iter));
	++iter;
}
cout<<count<<endl;
}

#include<iostream>
#include<fstream>
#include<string>
using namespace std;

int main(){
    ifstream file;
    file.open("triangle.txt");
    if(!file.is_open())
        cout<<"error opening file";
    else{
        string line;
        for(int i=0;i<100<i++)
            getline(file,line);
        }
 return 0;
}

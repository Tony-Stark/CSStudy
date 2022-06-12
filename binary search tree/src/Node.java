
public class Node<T> {
    
	int key;
    T value;
    Node<T> left;
    Node<T> right;
    Node<T> parent;
 
    Node(int key) {
        this.key = key;
        right = null;
        left = null;
        parent=null;
        value=null;
    }
    Node(int key, T value) {
        this.key = key;
        right = null;
        left = null;
        parent=null;
        this.value=value;
    }
    public String toString() {
    	return "{ NodeKey: = " + Integer.toString(key)+ " ; NodeVal: = < " + value.toString()+ " > }\n";
    }
    public int getKey() {
    	
    	return key;
    }
}

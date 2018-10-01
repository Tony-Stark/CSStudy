import javax.swing.*;
import javax.swing.tree.DefaultMutableTreeNode;

import java.awt.*;
//import java.util.Stack;

public class Main extends JFrame {
	
	 public static DefaultMutableTreeNode printAux(int a,DefaultMutableTreeNode t) {
		 DefaultMutableTreeNode next =new DefaultMutableTreeNode(a);
		 t.add(next);
		 return next;
	}
	void button_test(Container container) {
		JButton b1= new JButton("Button1");
		JButton b2= new JButton("Button2");
		container.add(b1);
		container.add(b2);
	}
	public Main(String caption) {
		super(caption);

	}
	public static void visitWithJTree(DefaultMutableTreeNode curr,Node<?> node) {
		 DefaultMutableTreeNode next =new DefaultMutableTreeNode(node.key);
		 curr.add(next);
		if (node.left!=null) 
			visitWithJTree(next,node.left);
		if (node.right!=null) 
			visitWithJTree(next,node.right);
	}
	public static void main(String[] args){		
		Main app= new Main("Hello World");
		BinaryTree<Object> bt= new BinaryTree<Object>();
		//BinaryTree<Object> bt1= new BinaryTree<Object>();
		bt.add(6,"Hello");
		bt.add(4,"Hello1");
		bt.add(8,"Hello2");
		bt.add(3,"Hello3");
		bt.add(5,"Hello4");
		bt.add(7,"Hello5");
		bt.add(9,"Hello6");
		app.setLayout(new GridLayout(2,1));
		JPanel panel= new JPanel();
		JPanel panel2= new JPanel();
		app.add(panel);
		app.add(panel2);
		app.button_test(panel);
		DefaultMutableTreeNode top_origin= new DefaultMutableTreeNode("Tree");
		DefaultMutableTreeNode top= top_origin;
		//visitWithJTree(top,bt.root);
		Method method = (a,t)->{
			Object o=printAux(a,(DefaultMutableTreeNode)t);
		return o;
		};
		bt.visitGeneric(method,top);
		JTree jt1=new JTree(top_origin);
		
		panel2.add(jt1);
		app.pack();
		app.setVisible(true);
		System.out.println(bt);		
	}
}

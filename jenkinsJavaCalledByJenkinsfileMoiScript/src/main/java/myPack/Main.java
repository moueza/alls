package myPack;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
	List<Ligne> linesCollection= new ArrayList<Ligne>();
	
	public static void main(String[] args) {
		System.out.println("OK");
		Main main = new Main();
		main.readLineByLineExample1();
	}
	

	/** https://www.javatpoint.com/how-to-read-file-line-by-line-in-java */
	public void readLineByLineExample1() {
		try {
			File file = new File("poubExemple.txt"); // creates a new file instance
			FileReader fr = new FileReader(file); // reads the file
			BufferedReader br = new BufferedReader(fr); // creates a buffering character input stream
			StringBuffer sb = new StringBuffer(); // constructs a string buffer with no characters
 			String line;
			while ((line = br.readLine()) != null) {
				sb.append(line); // appends line to string buffer
				sb.append("\n"); // line feed
				this.linesCollection.add
			}
			fr.close(); // closes the stream and release the resources
			System.out.println("Contents of File: ");
			System.out.println(sb.toString()); // returns a string that textually represents the object
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
}

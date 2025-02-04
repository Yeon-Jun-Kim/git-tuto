package p02;

import java.util.ArrayList;
import java.util.Iterator;

public class ListTest {

	public static void main(String[] args) {
		
		
		ArrayList<String> list = new ArrayList<>();
		
		//저장
		list.add("홍길동1");
		list.add("홍길동2");
		list.add("홍길동3");
		list.add("홍길동4");
		//list.add(10);//문자열이 아니면 저장 불가하다.
		
		//출력 1
		System.out.println(list);
		//출력 2 forehach문
		for(String s : list) // String으로 정했으므로
		{
			System.out.println(">>" + s);
		}
		//출력3 - Iterator
		Iterator<String> ite = list.iterator();
		while(ite.hasNext())
		{
			String x = ite.next();
			System.out.println(x);
		}
		
		//출력 4 get(idx) 
		String x3 = list.get(2);
		String x = list.get(0);
		String x2 = list.get(1);
		System.out.println(x+"\t" +x2);
		System.out.println(x3);
	}

}

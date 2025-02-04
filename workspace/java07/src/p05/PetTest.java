package p05;

public class PetTest {

	public static void main(String[] args) {

		Pet p = new Cat("야옹", "암컷", 2);
		
		 /* p 변수는 컴파일 시점에는 Pet으로 인식되고 //변수
		 실행 시점에는 실제로 new해서 Cat 클래스로 인식된다. //메서드
		 ( 동적 바인딩)
		 동적 바인딩은 메서드에만 적용되는 개념이므로 변수는 원래 자료형 그대로 가게 된다.
		*/System.out.println(p.age); // p 그대로

		System.out.println("고양이 총정보 " + p.getpet()); // 메서드므로 cat 기준으로
		//형변환 다형성을 이용하여 객체 생성 후에 자식에만 존재하는 멤버 접근하려면 형변환이 필요
		Cat c = (Cat)p;
		System.out.println(c.age);
		
		p = new Dog("망치", "수컷", 1, "불독");
		System.out.println("강아지 총정보 " + p.getpet());
		System.out.println(p.age); // 여기서는 부모를 참조하게된다.
		
		
		
	}

}
#include <stdio.h>

void recurse(int i);

	int main()
{
	recurse(1);
	printf("main terminating \n");



}
	void recurse(int i) {
		if (i <= 3) {
			
			
			recurse(i + 1);
			printf("i : %d\n", i); 

		}
		else {
			printf("�Լ� Ż�� ����\n");

		}
	}
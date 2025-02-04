//employee_global.c

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

//전역변수로head, tail

#define BUF_SIZE 50

typedef struct employee {
	char id[6];
	char name[20];
	int position;
	int salary;
	char comAddr[BUF_SIZE];
	struct employee* next;
} EMPLOYEE, * LPEMPLOYEE;
//구조체 자료형, 구조체포인터 자료형

EMPLOYEE* head, * tail;
//LPEMPLOYEE head, tail;
int seq_no = 0;

void str_check(char* msg, int size, char* f_addr);
void num_check(char* msg, int max, int min, int* f_addr);
char* showPosition(int pos);
void emp_input();
void emp_output();
void emp_find();
void emp_delete();
void emp_save();
void emp_load();
void node_free();


//"성명", 20, 3006
//"회사주소", 50, 3034
void str_check(char* msg, int size, char* f_addr)
{
	char tmp[100];

	do {
		printf("%s ? ", msg);
		gets(tmp);
	} while (strlen(tmp) >= size);

	strcpy(f_addr, tmp);

}

//"직급", 3, 0, 3026
//"월급", 7000000, 0, 3030
void num_check(char* msg, int max, int min, int* f_addr)
{
	int tmp;

	do {
		printf("%s ? ", msg);
		scanf("%d%*c", &tmp);
	} while (tmp<min || tmp>max);

	*f_addr = tmp;
}

void emp_input()
{
	EMPLOYEE* ptr;

	while (1)
	{
		ptr = (EMPLOYEE*)malloc(sizeof(struct employee));
		if (ptr == NULL)
		{
			perror("Error ");
			exit(1);
		}

		seq_no++;
		sprintf(ptr->id, "A%.4d", seq_no);		//(저장될 메모리주소, 서식, 값) %.4 = 정수 4자리중에 남은칸은 0으로 채운다

		str_check("\n성명(입력종료:end)", sizeof(ptr->name), ptr->name);
		if (!strcmp(ptr->name, "end"))
		{
			seq_no--;
			break;
		}

		num_check("직급(0:부장,1:과장,2:대리,3:사원)", 3, 0, &ptr->position);

		num_check("월급", 7000000, 0, &ptr->salary);

		str_check("회사주소", sizeof(ptr->comAddr), ptr->comAddr);

		ptr->next = NULL;

		if (head == NULL)
			head = tail = ptr;
		else
		{
			tail->next = ptr;
			tail = ptr;
		}
	}
	free(ptr);
}//emp_input() end

char* showPosition(int pos)
{
	switch (pos)
	{
	case 0:
		return "부장";
		break;
	case 1:
		return "과장";
		break;
	case 2:
		return "대리";
		break;
	case 3:
		return "사원";
		break;
	}

	return NULL;

	//강사님 풀이
	//static char POS[4][20] = {"부장", "과장", "대리", "사원"};

	//return POS[pos];
}

void emp_output()
{
	EMPLOYEE* ptr;

	ptr = head;
	while (ptr)
	{
		printf("%s, %s, %s, %d, %s \n", ptr->id, ptr->name,
			showPosition(ptr->position),
			ptr->salary, ptr->comAddr);
		ptr = ptr->next;
	}
}//emp_output() end

void emp_find()
{
	EMPLOYEE* ptr;
	int found;
	char s_name[20];

	ptr = head;
	if (ptr == NULL)
	{
		printf("노드없음. 부모함수로 복귀 \n");
		return;
	}

	while (1)
	{
		printf("\n검색할 성명 ? (입력종료:end) ");
		gets(s_name);
		if (!strcmp(s_name, "end"))
			break;

		found = 1;
		ptr = head;

		while (ptr)
		{
			if (!strcmp(ptr->name, s_name))
			{
				found = 0;
				printf("%s, %s, %d, %d, %s \n", ptr->id, ptr->name,
					ptr->position,
					ptr->salary, ptr->comAddr);
				//break;
			}
			ptr = ptr->next;
		}

		if (found)
			printf("%s, Not found !!\n", s_name);

	} //while(1) end

}//emp_find() end

void emp_delete()
{
	EMPLOYEE* ptr, * prev;
	int found;
	char ch, s_id[10];

	ptr = head;
	if (ptr == NULL)
	{
		printf("노드없음. 부모함수로 복귀 \n");
		return;
	}

	printf("\n삭제할 ID ? ");
	gets(s_id); //A0001, A0005, A0003	(첫번째, 마지막, 중간) 노드를 삭제하는 상황

	*s_id = toupper(*s_id);

	found = 1;
	while (ptr)
	{
		if (strcmp(ptr->id, s_id) == 0)
		{
			printf("%s, %s, %d, %d, %s \n", ptr->id, ptr->name,
				ptr->position,
				ptr->salary, ptr->comAddr);
			printf("삭제할까요? (y/n) ");
			scanf(" %c%*c", &ch);
			if (ch == 'Y' || ch == 'y')
			{
				if (ptr == head)
				{
					head = ptr->next;
				}
				else if (ptr == tail)
				{
					tail = prev;
					tail->next = NULL;
				}
				else
				{
					prev->next = ptr->next;
				}

				found = 0;
			}
			break;
		}
		prev = ptr;
		ptr = ptr->next;

	} //while(ptr) end

	if (found)
		printf("노드삭제 안됨!!! \n");
	else
		printf("노드삭제 됨!!! \n");

}//emp_delete() end

void node_free()
{
	EMPLOYEE* ptr, * x;

	ptr = head;
	while (ptr)
	{
		x = ptr;
		ptr = ptr->next;
		free(x);
	}
}//node_free() end

void emp_save(void)
{
	EMPLOYEE* ptr;
	FILE* fp;

	ptr = head;
	if (ptr == NULL)
	{
		printf("노드 없음. \n");
		return;
	}

	fp = fopen("s_emp.dat", "wb");
	if (fp == NULL)
	{
		perror("emp_save() ");
		exit(1);
	}

	fwrite(&seq_no, sizeof(int), 1, fp);

	while (ptr)
	{
		fwrite(ptr, sizeof(EMPLOYEE), 1, fp);
		ptr = ptr->next;
	}
	fclose(fp);

	printf("사원정보save. \n");
}//emp_save() end

void emp_load(void)
{
	struct employee* ptr;
	FILE* fp;

	fp = fopen("s_emp.dat", "rb");
	if (fp == NULL)
	{
		perror("emp_load() ");
		return;
	}

	fread(&seq_no, sizeof(int), 1, fp);

	while (1)
	{
		ptr = (struct employee*)malloc(sizeof(struct employee));
		if (ptr == NULL)
		{
			perror("emp_load() : ");
			exit(1);
		}

		if (fread(ptr, sizeof(struct employee), 1, fp) != 1)		//fp(스트림) 에서 100byte 만큼 하나 읽어서 ptr에 넣어주세요
		   break;

		if (head == NULL)
			head = tail = ptr;
		else
		{
			tail->next = ptr;
			tail = ptr;
		}

	}
	fclose(fp);
	free(ptr);

	printf("사원정보 load. \n");
}//emp_load() end

int main()
{
	int choice, stop = 1, count;

	head = tail = NULL;
	emp_load();

	while (stop)
	{
		printf("\n1. 사원정보 입력 \n");
		printf("2. 사원정보 출력 \n");
		printf("3. 사원정보 검색 \n");
		printf("4. 사원정보 삭제 \n");
		printf("5. 사원정보 저장\n");
		printf("6. 프로그램 종료 \n");
		printf("Select ? (1~6) ");
		scanf("%d%*c", &choice);
		switch (choice)
		{
		case 1: emp_input();
			break;
		case 2: emp_output();
			break;
		case 3: emp_find();
			break;
		case 4: emp_delete();
			break;
		case 5: emp_save();
			break;
		case 6: node_free();
			stop = 0;
			break;
		}

	}

	return 0;
}//main() end
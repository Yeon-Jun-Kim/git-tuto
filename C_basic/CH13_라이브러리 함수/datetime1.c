#include <stdio.h>
#include <time.h>


int main()
{
	time_t curr_t;
	struct tm* ptr;

	curr_t = time(NULL);// 시스템의 달력시간을 리턴, 1990년 1월 1일 0시 0분 0초 부터 1씩 count
	printf("curr_t : %u\n", curr_t);

	printf("현재날짜와 시간 : %s \n", ctime(&curr_t)); // 문자열로 구하기

	ptr = localtime(&curr_t);// 시스템의 달력시간을 구조체 localtime 구조체 함수
							// tm에 멤버별로 나누어 저장하고
							//할당된 ptr 구조체를 반환한다.

	printf("Date ; %d년, %d월, %d일\n", ptr->tm_year + 1900, ptr->tm_mon + 1, ptr->tm_mday);
	printf("Time ; %d시, %d분, %d초\n", ptr->tm_hour, ptr->tm_min, ptr->tm_sec);

	ptr->tm_year = 2023;
	ptr->tm_mon = 4;
	ptr->tm_mday = 1;

	printf("date %d년 %월 %일\n", ptr->tm_year, ptr->tm_mon, ptr->tm_mday);


}
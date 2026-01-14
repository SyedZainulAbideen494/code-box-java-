const program2 = {
  id: 2,
  title: "Program 2 - Unordered Array Operations (C)",
  lang: "c",
  code: `#include <stdio.h>

int n = 0;

void create(int a[])
{
    int i;
    printf("\\nEnter size: ");
    scanf("%d", &n);

    printf("Enter elements:\\n");
    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);
}

void display(int a[])
{
    int i;
    if (n == 0)
    {
        printf("\\nArray is empty\\n");
        return;
    }

    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
    printf("\\n");
}

void insert(int a[])
{
    int ele, pos, i;
    printf("Enter element and position: ");
    scanf("%d %d", &ele, &pos);

    for (i = n; i > pos; i--)
        a[i] = a[i - 1];

    a[pos] = ele;
    n++;
}

void deleteElement(int a[])
{
    int ele, pos = -1, i;
    printf("Enter element to delete: ");
    scanf("%d", &ele);

    for (i = 0; i < n; i++)
    {
        if (a[i] == ele)
        {
            pos = i;
            break;
        }
    }

    if (pos == -1)
        return;

    for (i = pos; i < n - 1; i++)
        a[i] = a[i + 1];
    n--;
}

int main()
{
    int a[20], choice;
    while (1)
    {
        printf("\\n1.Create 2.Insert 3.Delete 4.Display 5.Exit\\n");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1: create(a); break;
        case 2: insert(a); break;
        case 3: deleteElement(a); break;
        case 4: display(a); break;
        case 5: return 0;
        }
    }
}`
};

export default program2;

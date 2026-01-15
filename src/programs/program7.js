 const program7 = {
  id: 7,
  title: "Program 7 - Linked List and Stack (Using Linked List)",
  lang: "c",
  code: `#include <stdio.h>
#include <stdlib.h>

/* Node structure */
struct node
{
    int data;
    struct node *next;
};

struct node *head = NULL;   // Linked List
struct node *top = NULL;    // Stack

/* -------- LINKED LIST FUNCTIONS -------- */

void create_ll()
{
    struct node *temp, *curr;
    int n, i;

    printf("Enter number of nodes: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        temp = (struct node *)malloc(sizeof(struct node));
        printf("Enter data: ");
        scanf("%d", &temp->data);
        temp->next = NULL;

        if (head == NULL)
            head = temp;
        else
        {
            curr = head;
            while (curr->next != NULL)
                curr = curr->next;
            curr->next = temp;
        }
    }
}

void insert_begin()
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    printf("Enter data: ");
    scanf("%d", &temp->data);
    temp->next = head;
    head = temp;
}

void delete_ll()
{
    struct node *temp;
    int key;

    if (head == NULL)
    {
        printf("Linked list is empty\\n");
        return;
    }

    printf("Enter element to delete: ");
    scanf("%d", &key);

    if (head->data == key)
    {
        temp = head;
        head = head->next;
        free(temp);
        return;
    }

    temp = head;
    while (temp->next != NULL && temp->next->data != key)
        temp = temp->next;

    if (temp->next == NULL)
        printf("Element not found\\n");
    else
    {
        struct node *del = temp->next;
        temp->next = del->next;
        free(del);
    }
}

void display_ll()
{
    struct node *temp = head;

    if (temp == NULL)
    {
        printf("Linked list is empty\\n");
        return;
    }

    while (temp != NULL)
    {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

/* -------- STACK FUNCTIONS -------- */

void push()
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));
    printf("Enter data: ");
    scanf("%d", &temp->data);
    temp->next = top;
    top = temp;
}

void pop()
{
    struct node *temp;

    if (top == NULL)
    {
        printf("Stack Underflow\\n");
        return;
    }

    temp = top;
    top = top->next;
    printf("Popped element: %d\\n", temp->data);
    free(temp);
}

void display_stack()
{
    struct node *temp = top;

    if (temp == NULL)
    {
        printf("Stack is empty\\n");
        return;
    }

    while (temp != NULL)
    {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

/* -------- MAIN MENU -------- */

int main()
{
    int choice;

    while (1)
    {
        printf("\\n--- MENU ---");
        printf("\\n1. Create Linked List");
        printf("\\n2. Insert at Beginning (LL)");
        printf("\\n3. Delete from Linked List");
        printf("\\n4. Display Linked List");
        printf("\\n5. Push Stack");
        printf("\\n6. Pop Stack");
        printf("\\n7. Display Stack");
        printf("\\n8. Exit");
        printf("\\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1: create_ll(); break;
        case 2: insert_begin(); break;
        case 3: delete_ll(); break;
        case 4: display_ll(); break;
        case 5: push(); break;
        case 6: pop(); break;
        case 7: display_stack(); break;
        case 8: return 0;
        default: printf("Invalid choice\\n");
        }
    }
}`
};

export default program7;

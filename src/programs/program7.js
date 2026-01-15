const program7 = {
  id: 7,
  title: "Program 7 - Linked List and Stack Algorithms",
  lang: "c",
  code: `/* LINKED LIST & STACK ALGORITHMS */

/* Create Linked List */
Create()
{
    temp = malloc(sizeof(node));
    printf("Enter data: ");
    scanf("%d", &temp->data);
    temp->ptr = NULL;

    if (head == NULL)
        head = temp;
    else
    {
        curr = head;
        while (curr->ptr != NULL)
            curr = curr->ptr;
        curr->ptr = temp;
    }
}

/* Insert at Beginning */
Insert_beg()
{
    temp = malloc(sizeof(node));
    printf("Enter data: ");
    scanf("%d", &temp->data);
    temp->ptr = head;
    head = temp;
}

/* Insert at End */
Insert_end()
{
    temp = malloc(sizeof(node));
    printf("Enter data: ");
    scanf("%d", &temp->data);
    temp->ptr = NULL;

    curr = head;
    while (curr->ptr != NULL)
        curr = curr->ptr;
    curr->ptr = temp;
}

/* Display */
Traversal()
{
    curr = head;
    while (curr != NULL)
    {
        printf("%d ", curr->data);
        curr = curr->ptr;
    }
}

/* STACK PUSH */
Push()
{
    temp = malloc(sizeof(node));
    printf("Enter data: ");
    scanf("%d", &temp->data);
    temp->next = TOP;
    TOP = temp;
}

/* STACK POP */
Pop()
{
    if (TOP == NULL)
        printf("Underflow");
    else
    {
        temp = TOP;
        TOP = TOP->next;
        free(temp);
    }
}`
};

export default program7;

from django.db import models

class Todo(models.Model):
    '''
    Title: What the task is.
    Description: Give more explanation about a particular task.
    Completed: If the task is complete the status is True otherwise it remains False.
    '''

    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title

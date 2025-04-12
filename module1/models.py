from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class GameUser(AbstractUser):
    option_1 = models.IntegerField(default=0)
    option_2 = models.IntegerField(default=0)
    option_3 = models.IntegerField(default=0)

    groups = models.ManyToManyField(
        Group,
        verbose_name=('groups'),
        blank=True,
        help_text=(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="gameuser_set",  # Add this line
        related_query_name="gameuser", # Add this line
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=('user permissions'),
        blank=True,
        help_text=('Specific permissions for this user.'),
        related_name="gameuser_permissions_set", # Add this line
        related_query_name="gameuser_permission", # Add this line
    )

    def __str__(self):
        return self.username
# Generated by Django 2.2.6 on 2019-11-05 18:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20191105_1812'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='planning',
            options={'ordering': ('id',)},
        ),
    ]
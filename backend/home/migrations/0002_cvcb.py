# Generated by Django 2.2.28 on 2023-07-07 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cvcb',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cbcv67', models.BigIntegerField()),
                ('e3456', models.BigIntegerField()),
            ],
        ),
    ]

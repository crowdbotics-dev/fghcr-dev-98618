# Generated by Django 2.2.28 on 2023-07-07 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_cvcb'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jvcee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('xsfr', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Vbb4',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cvvn', models.BigIntegerField()),
            ],
        ),
    ]

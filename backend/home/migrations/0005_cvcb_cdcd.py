# Generated by Django 2.2.28 on 2023-07-07 10:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_jvcee_ghtt'),
    ]

    operations = [
        migrations.AddField(
            model_name='cvcb',
            name='cdcd',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cvcb_cdcd', to='home.Vbb4'),
        ),
    ]
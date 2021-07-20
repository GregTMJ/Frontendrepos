from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.


class HomeView(TemplateView):
    template_name = 'Home.html'


class AboutView(TemplateView):
    template_name = 'about.html'


class ContactView(TemplateView):
    template_name = 'contacts.html'

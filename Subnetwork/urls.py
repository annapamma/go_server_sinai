from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('submit_genes/', views.index, name='index'),
    # path('select_pathways/', views.pathway_graph, name='pathway_graph'),
    # url(r'^(?P<gene_list>[\w|\W]+)', views.index),
]
from rest_framework import serializers
from .models import Course


class GetAllCourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = ('id','title')


class CourseSerializer(serializers.Serializer):
    title = serializers.CharField()
    content = serializers.CharField()
    price = serializers.IntegerField()
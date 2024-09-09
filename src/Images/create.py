from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from ..serializers import ProductImgSerializer, ProductSerializer, CreateProductSerializer, CategorySerializer, SubCategorySerializer, ProductColorSerializer
from ...models import ProductImg, ProductColor, Category, SubCategory
from django.core.files.uploadedfile import UploadedFile
import json

@api_view(['POST'])
@permission_classes([permissions.IsAdminUser])
def create_category(request):
    try:
        try:
            name= request.data.get('name')
            category= Category.objects.get(name= name)
            if category:
                return Response('category already exist', status= status.HTTP_400_BAD_REQUEST)
        except Category.DoesNotExist:
            pass
        serializer= CategorySerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as error:
        return Response({"message": f"An error occurred: {error}"}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
@permission_classes([permissions.IsAdminUser])
def create_subcategory(request):
    try:
        try:
            category= request.data.get('category')
            name= request.data.get('name')
            subcategory= SubCategory.objects.get(category= category, name= name)
            if subcategory:
                return Response('subcategory already exist', status= status.HTTP_400_BAD_REQUEST)
        except SubCategory.DoesNotExist:
            pass
        serializer= SubCategorySerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
    except Exception as error:
        return Response({"message": f"An error occurred: {error}"}, status= status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([permissions.IsAdminUser])
def create_product(request):
    try:
        images_data = request.FILES.getlist('imgs', [])
        colors_data = request.data.get('colors', '[]')  # Default to empty JSON array

        # Parse colors_data if it's a string
        if isinstance(colors_data, str):
            try:
                colors_data = json.loads(colors_data)
            except json.JSONDecodeError:
                return Response({"message": "Invalid format for colors data"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = CreateProductSerializer(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            imgs_data = []
            colors_data_ = []

            for image_data in images_data:
                img_serializer = ProductImgSerializer(data={'img': image_data, 'product': product.id})
                if img_serializer.is_valid():
                    img_instance = img_serializer.save()
                    # Append only the img field
                    imgs_data.append({'img': img_instance.img.url})
                else:
                    return Response(img_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            for color_data in colors_data:
                color_serializer = ProductColorSerializer(data={
                    'product': product.id,
                    'color': color_data['color'],
                    'quantity': color_data['quantity']
                })
                if color_serializer.is_valid():
                    color_instance = color_serializer.save()
                    # Append id, color, and quantity fields
                    colors_data_.append({
                        'id': color_instance.id,
                        'color': color_instance.color,
                        'quantity': color_instance.quantity
                    })
                else:
                    return Response(color_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            response_data = {
                'product': serializer.data,
                'imgs': imgs_data,
                'colors': colors_data_,
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as error:
        return Response({"message": f"An error occurred: {error}"}, status=status.HTTP_400_BAD_REQUEST)
    try:
        images_data = request.FILES.getlist('imgs', [])
        colors_data = request.data.get('colors', '[]')  # Default to empty JSON array

        # Parse colors_data if it's a string
        if isinstance(colors_data, str):
            try:
                colors_data = json.loads(colors_data)
            except json.JSONDecodeError:
                return Response({"message": "Invalid format for colors data"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = CreateProductSerializer(data=request.data)
        if serializer.is_valid():
            product = serializer.save()
            imgs_data = []
            colors_data_ = []

            for image_data in images_data:
                img_serializer = ProductImgSerializer(data={'img': image_data, 'product': product.id})
                if img_serializer.is_valid():
                    img_serializer.save()
                    imgs_data.append(img_serializer.data)
                else:
                    return Response(img_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            for color_data in colors_data:
                color_serializer = ProductColorSerializer(data={
                    'product': product.id,
                    'color': color_data['color'],
                    'quantity': color_data['quantity']
                })
                if color_serializer.is_valid():
                    color_serializer.save()
                    colors_data_.append(color_serializer.data)
                else:
                    return Response(color_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            response_data = {
                'product': serializer.data,
                'imgs': imgs_data,
                'colors': colors_data_,
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as error:
        return Response({"message": f"An error occurred: {error}"}, status=status.HTTP_400_BAD_REQUEST)

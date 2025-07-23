import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cross, ArrowLeft, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'services', name: 'Services' },
    { id: 'events', name: 'Events' },
    { id: 'community', name: 'Community' },
    { id: 'youth', name: 'Youth' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      alt: 'Church Service',
      category: 'services'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      alt: 'Bible Study Group',
      category: 'community'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      alt: 'Church Exterior',
      category: 'services'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
      alt: 'Fellowship Hall',
      category: 'community'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
      alt: 'Youth Conference',
      category: 'youth'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop',
      alt: 'Easter Celebration',
      category: 'events'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      alt: 'Prayer Meeting',
      category: 'services'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop',
      alt: 'Community Outreach',
      category: 'community'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop',
      alt: 'Choir Performance',
      category: 'services'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&h=600&fit=crop',
      alt: 'Children Ministry',
      category: 'youth'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop',
      alt: 'Christmas Service',
      category: 'events'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=800&h=600&fit=crop',
      alt: 'Baptism Service',
      category: 'services'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => window.history.back()}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Cross className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">St Jude's Anglican</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Church Gallery</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Celebrating moments of faith, fellowship, and community at St Jude's Anglican Church
            </p>
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import SectionTitle from 'components/sectiontitle';

const reviews = [
  {
    name: 'Jonas',
    text: 'Labai skani ir visuomet šviežiai kepta duona. Mėgaujamės kiekvieną savaitgalį. Ačiū už jūsų darbą.',
    photo: 'https://i.pinimg.com/originals/75/ec/d9/75ecd9c68fc73e4475c381bd292e37aa.png',
  },
  {
    name: 'Petras',
    text: 'Atsiliepimas numeris du. Labai gera kepykla. Skanios bandelės ir kiti kepiniai.',
    photo: 'https://i.pinimg.com/originals/75/ec/d9/75ecd9c68fc73e4475c381bd292e37aa.png',
  },
  {
    name: 'Laima',
    text: 'Ačiū už šviežias minkštas bandeles ir kasdieninę duoną. Mėgstame jūsų produkciją.',
    photo: 'https://i.pinimg.com/originals/75/ec/d9/75ecd9c68fc73e4475c381bd292e37aa.png',
  },
];

const ReviewsPage: React.FC = () => (
  <Container id="reviews" sx={{ mb: 5, height: '80vh' }}>
    <SectionTitle title="Atsiliepimai" description="Klientų atsiliepimai apie kepyklą ir kepinius" />
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
      <Swiper
        loop
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <Box sx={{
              width: '100%',
              height: 300,
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <Box
                component="img"
                src={review.photo}
                sx={{
                  width: '150px', height: '150px', borderRadius: '100%', mr: '30px',
                }}
              />
              <Box>
                <Typography
                  sx={{
                    width: '250px', height: '100%', display: 'flex', mt: '30px', fontStyle: 'italic',
                  }}
                >
                  {review.text}
                </Typography>
                <Typography variant="h5" sx={{ mt: '10px' }}>
                  {review.name}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Container>
);

export default ReviewsPage;

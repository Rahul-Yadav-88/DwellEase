
const dummyData = [
  {
    id: 1,
    title: 'Luxury',
    image: 'images/deal-03.jpg'
  },
  {
    id: 2,
    title: 'Kichen',
    image: 'images/deal-02.jpg'
  },
  {
    id: 3,
    title: 'Dining',
    image: 'images/deal-01.jpg'
  }
];

const RoomCard = ({ image, title }) => (
  <div className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4 bg-white">
      <h3 className="text-xl font-semibold text-center">{title}</h3>
    </div>
  </div>
);

const DummyData = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2">Best Appartment & Sea view</h2>
      <p className="text-center text-gray-600 mb-8">
      Get the best villa website template in HTML CSS and Bootstrap for your business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {dummyData.map((room) => (
          <RoomCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
};

export default DummyData;
export const metricCards = [
  { label: "Total Sales", value: "$24,780", delta: "+18.6%", detail: "vs last 30 days" },
  { label: "Orders", value: "12", delta: "+33.3%", detail: "vs last 30 days" },
  { label: "Artworks", value: "28", delta: "24 available • 4 sold", detail: "" },
  { label: "Visitors", value: "1,842", delta: "+12.4%", detail: "vs last 30 days" },
  { label: "Inquiries", value: "7", delta: "+40%", detail: "vs last 30 days" }
];

export const artworks = [
  { id: "ART-001", title: "Echoes of Nyamirambo", year: 2026, medium: "Oil on linen", size: "130 × 95 cm", status: "Available", price: "$3,800", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=200&q=80" },
  { id: "ART-002", title: "Threads of Heritage", year: 2023, medium: "Mixed media", size: "100 × 100 cm", status: "Available", price: "$2,800", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=200&q=80" },
  { id: "ART-003", title: "The Unbroken Spirit", year: 2024, medium: "Oil on linen", size: "150 × 100 cm", status: "Available", price: "$5,200", image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&w=200&q=80" },
  { id: "ART-004", title: "Fragments of Us", year: 2025, medium: "Oil on canvas", size: "90 × 120 cm", status: "Sold", price: "$3,200", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=200&q=80" },
  { id: "ART-005", title: "Journey Within", year: 2022, medium: "Oil on linen", size: "110 × 150 cm", status: "Sold", price: "$2,900", image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?auto=format&fit=crop&w=200&q=80" },
  { id: "ART-006", title: "City Rhythms", year: 2024, medium: "Oil on canvas", size: "160 × 80 cm", status: "Available", price: "$4,200", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=200&q=80" },
  { id: "ART-007", title: "Blooming Silence", year: 2025, medium: "Oil on linen", size: "100 × 80 cm", status: "Available", price: "$2,600", image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=200&q=80" }
];

export const orders = [
  { id: "#ORD-1024", customer: "Kwame Ndlovu", email: "kwame.ndlovu@email.com", artwork: "Echoes of Nyamirambo", date: "Jun 15, 2024", amount: "$3,800", status: "Paid", payment: "VISA •••• 4242", image: artworks[0].image },
  { id: "#ORD-1023", customer: "Amina Hassan", email: "amina.hassan@artcollect.co", artwork: "Threads of Heritage", date: "Jun 14, 2024", amount: "$2,800", status: "Paid", payment: "MC •••• 8888", image: artworks[1].image },
  { id: "#ORD-1022", customer: "James Carter", email: "james.carter@gallery.com", artwork: "The Unbroken Spirit", date: "Jun 12, 2024", amount: "$5,200", status: "Pending", payment: "VISA •••• 4242", image: artworks[2].image },
  { id: "#ORD-1021", customer: "Sophie Dubois", email: "sophie.dubois@artrance.fr", artwork: "Fragments of Us", date: "Jun 10, 2024", amount: "$3,200", status: "Paid", payment: "AMEX •••• 1005", image: artworks[3].image },
  { id: "#ORD-1020", customer: "Luca Bianchi", email: "luca.bianchi@collezione.it", artwork: "City Rhythms", date: "Jun 8, 2024", amount: "$4,200", status: "Shipped", payment: "MC •••• 8888", image: artworks[5].image },
  { id: "#ORD-1019", customer: "Emily Johnson", email: "emily.johnson@fineart.com", artwork: "Blooming Silence", date: "Jun 5, 2024", amount: "$2,600", status: "Delivered", payment: "VISA •••• 4242", image: artworks[6].image }
];
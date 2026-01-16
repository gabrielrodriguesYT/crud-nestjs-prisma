thub.com/YOUR_USERNAME/crud-nestjs-prisma.git
cd crud-nestjs-prisma
2. Install dependencies
bash
npm install
3. Configure environment variables
Create .env file:

text
DATABASE_URL="postgresql://user:password@localhost:5432/nestjs_crud"
JWT_SECRET="your-super-secret-jwt-key-at-least-32-characters"
PORT=3000
4. Run database migrations
bash
npx prisma migrate dev
5. Start the development server
bash
npm run start:dev
API will be available at http://localhost:3000

API Documentation
Swagger UI: http://localhost:3000/api

Endpoints
Method	Endpoint	Auth Required	Description
POST	/auth/register	No	Create new user
POST	/auth/login	No	Login and get JWT token
GET	/products	Yes	List all products
POST	/products	Yes	Create new product
GET	/products/:id	Yes	Get product by ID
PUT	/products/:id	Yes	Update product
DELETE	/products/:id	Yes	Delete product
Testing with Postman
Login first:

text
POST http://localhost:3000/auth/login
{
  "email": "test@test.com",
  "password": "123456"
}
Copy the access_token from response.

Protected requests:

text
GET http://localhost:3000/products
Authorization: Bearer YOUR_JWT_TOKEN
Project Structure
text
src/
├── auth/          # Authentication module (JWT, Guards)
├── products/      # Products module (Controller, Service, DTOs)
├── prisma/        # Database schema and migrations
└── app.module.ts
NPM Scripts
bash
npm run start      # Production build
npm run start:dev  # Development with hot-reload
npm run build      # Build for production
npm run prisma:studio  # Database GUI
Environment Variables
Variable	Description	Default
DATABASE_URL	PostgreSQL connection string	-
JWT_SECRET	JWT signing secret (min 32 chars)	-
PORT	Server port	3000
Next Steps
User-Product relationships

Role-based access control

File uploads

Pagination and filters

Deployment (Railway/Vercel)

Author
Gabriel Rodrigues
GitHub

License
MIT License

text

**Save as `README.md` in project root:**
```bash
git add README.md
git commit -m "docs: add professional README"
git push

Perfect for GitHub! Clean, professional formatting.

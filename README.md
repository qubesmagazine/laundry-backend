=

# Laundry API

This API provides information on various laundry services, their locations, services offered, pricing, and other details. It includes endpoints for retrieving details about different laundry companies and their services.

## Features

- Retrieve a list of laundry services.
- Access detailed information about each laundry company, including address, phone number, ratings, location, prices for services, opening hours, and special services.

---

## API Endpoints

### Base URL

```
http://localhost:5000/api/laundry
```

### 1. **GET** /laundry

Retrieve the list of all laundry services.

#### Response Example:

```json
[
  {
    "name": "Sparkle Cleaners",
    "address": "25, Awolowo Road, Ikoyi, Lagos",
    "phone": "+2349056784321",
    "rating": 4.5,
    "location": {
      "longitude": 3.4342,
      "latitude": 6.4547
    },
    "prices": {
      "shirt": 450,
      "trouser": 600,
      "bedsheet": 1400,
      "suit": 2400
    },
    "opening_hours": "9:00 AM - 8:00 PM",
    "special_services": ["Same-Day Service", "Curtain Cleaning", "Wedding Gown Cleaning"]
  },
  ...
]
```

---

### 2. **GET** /laundry/:id

Retrieve a specific laundry service by ID.

#### URL Parameters:

- `id` (required): The unique identifier for the laundry service.

#### Response Example:

```json
{
  "name": "Sparkle Cleaners",
  "address": "25, Awolowo Road, Ikoyi, Lagos",
  "phone": "+2349056784321",
  "rating": 4.5,
  "location": {
    "longitude": 3.4342,
    "latitude": 6.4547
  },
  "prices": {
    "shirt": 450,
    "trouser": 600,
    "bedsheet": 1400,
    "suit": 2400
  },
  "opening_hours": "9:00 AM - 8:00 PM",
  "special_services": ["Same-Day Service", "Curtain Cleaning", "Wedding Gown Cleaning"]
}
```

---

### 3. **POST** /laundry

Create a new laundry service.

#### Request Body Example:

```json
{
  "name": "New Laundry Service",
  "address": "123 New Street, City",
  "phone": "+2348000000000",
  "rating": 4.2,
  "location": {
    "longitude": 3.5050,
    "latitude": 6.5600
  },
  "prices": {
    "shirt": 500,
    "trouser": 700,
    "bedsheet": 1500,
    "suit": 2600
  },
  "opening_hours": "8:00 AM - 7:00 PM",
  "special_services": ["Express Service", "Curtain Cleaning"]
}
```

---

### 4. **PUT** /laundry/:id

Update an existing laundry service by ID.

#### URL Parameters:

- `id` (required): The unique identifier for the laundry service.

#### Request Body Example:

```json
{
  "name": "Updated Laundry Service",
  "address": "456 Updated Street, City",
  "phone": "+2349000000000",
  "rating": 4.8,
  "location": {
    "longitude": 3.6100,
    "latitude": 6.6000
  },
  "prices": {
    "shirt": 600,
    "trouser": 750,
    "bedsheet": 1600,
    "suit": 2800
  },
  "opening_hours": "9:00 AM - 8:30 PM",
  "special_services": ["Same-Day Service", "Eco-Friendly Detergent"]
}
```

---

### 5. **DELETE** /laundry/:id

Delete an existing laundry service by ID.

#### URL Parameters:

- `id` (required): The unique identifier for the laundry service to be deleted.

#### Response Example:

```json
{
  "message": "Laundry service deleted successfully"
}
```

---

## Data Model

### Laundry Object:

```json
{
  "name": "String",
  "address": "String",
  "phone": "String",
  "rating": "Number",
  "location": {
    "longitude": "Number",
    "latitude": "Number"
  },
  "prices": {
    "shirt": "Number",
    "trouser": "Number",
    "bedsheet": "Number",
    "suit": "Number"
  },
  "opening_hours": "String",
  "special_services": ["Array of String"]
}
```

### Example:

```json
{
  "name": "Sparkle Cleaners",
  "address": "25, Awolowo Road, Ikoyi, Lagos",
  "phone": "+2349056784321",
  "rating": 4.5,
  "location": {
    "longitude": 3.4342,
    "latitude": 6.4547
  },
  "prices": {
    "shirt": 450,
    "trouser": 600,
    "bedsheet": 1400,
    "suit": 2400
  },
  "opening_hours": "9:00 AM - 8:00 PM",
  "special_services": ["Same-Day Service", "Curtain Cleaning", "Wedding Gown Cleaning"]
}
```

---

## Getting Started

### Prerequisites

- Node.js installed
- Postman (optional, but useful for testing API endpoints)
- Express.js (or any other server framework)

### Installation

1. Clone the repository or download the files.
2. Install dependencies by running:
   ```bash
   npm install
   ```
3. Run the API server:
   ```bash
   npm start
   ```

---

## Testing the API

Use Postman or curl to send requests to the API.

Example request with Postman:

- `GET` request to `/laundry` will return the list of all laundry services.
- `POST` request to `/laundry` with the necessary data in the request body will create a new laundry service.

---

## License

This project is licensed under the MIT License.


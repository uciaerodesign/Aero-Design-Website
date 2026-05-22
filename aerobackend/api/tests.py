from django.test import TestCase


class HealthCheckTests(TestCase):
    def test_api_root_returns_available_endpoints(self):
        response = self.client.get("/api/")

        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            response.content,
            {
                "message": "Django backend is running.",
                "available_endpoints": ["/api/health/"],
                "frontend_url": "http://127.0.0.1:3000",
            },
        )

    def test_health_check_returns_success_payload(self):
        response = self.client.get("/api/health/")

        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(
            response.content,
            {
                "status": "ok",
                "message": "Backend is connected.",
            },
        )

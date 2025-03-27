const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", authenticateToken, appointmentController.createAppointment);
router.post("/cancel", authenticateToken, appointmentController.cancelAppointment);
router.post("/complete", authenticateToken, appointmentController.completeAppointment);
router.post("/payment-status", authenticateToken, appointmentController.updatePaymentStatus);
router.get("/user", authenticateToken, appointmentController.getAppointmentsByUser);
router.get("/doctor", authenticateToken, appointmentController.getAppointmentsByDoctor);

module.exports = router;

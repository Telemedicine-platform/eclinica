const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create", authenticateToken, appointmentController.createAppointment);
router.post("/cancel", authenticateToken, appointmentController.cancelAppointment);
router.post("/complete", authenticateToken, appointmentController.completeAppointment);
router.get("/user", authenticateToken, appointmentController.getAppointmentsByUser);

module.exports = router;

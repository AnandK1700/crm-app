const ticketNotificationModel = require("../models/ticketNotification.model")

exports.acceptNotificationRequest = async (req, res) => {
    const notificationObject = {
        subject: req.body.subject,
        content: req.body.content,
        recipientEmails: req.body.recipientEmails,
        requester: req.body.requester,
        ticketId: req.body.ticketId,
    }

    try {
        const notification = await ticketNotificationModel.create(
            notificationObject
        )
        res.status(200).send({
            requestId: notification.ticketId,
            status: "Accepted Request"
        })
    } catch (err) {
        console.log(`Error while accepting a notification request: ${err.message}`)
        res.status(500).send({
            message: "Internal Server Error!"
        })
    }
}
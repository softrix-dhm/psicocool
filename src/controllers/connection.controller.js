export const TestConn = async (req, res) => {
    try {
        return res.status(200).json({
            status: true,
            user: req.currentUser,
            app: req.currentApp
        });
    } catch {
        return res.status(500).json({ message: "Ocurrió un error" });
    }
};

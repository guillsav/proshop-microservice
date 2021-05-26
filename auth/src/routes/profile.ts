import { Router } from 'express';
import { AuthController } from '../controllers';
import { asyncHandler, attachUser } from '../middlewares';

const router = Router();

/**
 * @desc    Get current user profile.
 * @route   GET /api/v1/auth/profile
 * @access  Private
 */
router.get('/', attachUser, asyncHandler(AuthController.currentUser));

export default router;

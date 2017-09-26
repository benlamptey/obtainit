<?php

namespace Drupal\obtainit_styleguide\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class StyleGuideController.
 *
 * @package Drupal\obtainit_styleguide\Controller
 */
class StyleGuideController extends ControllerBase {

  /**
   * Return styleguide template.
   *
   * @return string
   */
  public function content() {

    return [
      '#theme' => 'style_guide',
      '#TEMPLATE_DIR' => drupal_get_path('theme', 'obtainit'),
    ];
  }
}
